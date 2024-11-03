const express = require('express');
const router = express.Router();
const { validate, transporter } = require('../middleware');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { promisify } = require("util");
require('dotenv').config();
const User = require('../models/user');

router.get('/profile', validate, (req, res) => {
    if (!req.session.isLogin) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    res.json({
        user_id: req.session.user_id,
        name: req.session.name,
        email: req.session.email,
    });
});

router.get('/profile/:id', validate, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({
            user_id: req.params.id,
            name: user.name,
            email: user.email,
        });
    } catch (e) {
        console.log("Error in getting profile:", e);
        res.status(500).json({ message: 'Error in getting profile.' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        req.session.name = user.name;
        req.session.email = user.email;
        req.session.user_id = user._id;
        req.session.isLogin = true;
        res.json({ message: 'Login successful', user: { _id:user._id,name: user.name, email: user.email } });
    } catch (e) {
        console.log('Error in login:', e);
        res.status(500).json({ message: 'Error logging in.' });
    }
});

router.post('/signup', async (req, res) => {
    try {
        if (await User.findOne({ email: req.body.email })) {
            return res.status(400).json({ message: 'User already registered' });
        }
        req.body.password = await bcrypt.hash(req.body.password, 12);
        const user = new User(req.body);
        await user.save();
        req.session.name = user.name;
        req.session.email = user.email;
        req.session.user_id = user._id;
        req.session.isLogin = true;
        res.json({ message: 'Signup successful', user: {_id:user._id, name: user.name, email: user.email } });
    } catch (e) {
        console.log('Error in signup:', e);
        res.status(500).json({ message: 'Error signing up.' });
    }
});

router.post('/profile/:id', validate, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.send("No such user present");
        }
        req.body.password = req.body.password
            ? await bcrypt.hash(req.body.password, 12)
            : user.password;
        await User.findByIdAndUpdate(req.params.id, {
            name: req.body.name || user.name,
            password: req.body.password,
        }, { new: true });
        req.session.name = req.body.name || user.name;
        res.json({ message: 'Profile Updated successfully' });
    } catch (e) {
        console.log('Error in update:', e);
        res.status(500).send('Error updating profile.');
    }
});
  

router.delete('/profile/:id', validate, async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'No such user present' });
        }
        req.session.destroy();
        res.json({ message: 'Account deleted successfully' });
    } catch (e) {
        console.log('Error in delete:', e);
        res.status(500).json({ message: 'Error deleting account.' });
    }
});

router.post('/logout', validate, (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: 'Error logging out.' });
        }
        res.json({ message: 'Logout successful' });
    });
});

router.post('/forgot-password', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const token = (await promisify(crypto.randomBytes)(20)).toString('hex');
        const expiration = Date.now() + 3600000;
        await User.updateOne(
            { email: req.body.email },
            { $set: { resetPasswordToken: token, resetPasswordExpires: expiration } }
        );
        const resetLink = `http://localhost:3000/reset-password/${token}`;
        await transporter.sendMail({
            to: user.email,
            subject: "Password Reset",
            text: `You are receiving this because you (or someone else) requested a password reset. Click the link to reset: ${resetLink}`
        });
        res.json({ message: 'Reset link sent to your email' });
    } catch (e) {
        console.log("Error in forgot password:", e);
        res.status(500).json({ message: 'Error in forgot password.' });
    }
});

router.post('/reset-password/:token', async (req, res) => {
    try {
        const user = await User.findOne({
            resetPasswordToken: req.params.token,
            resetPasswordExpires: { $gt: Date.now() },
        });
        if (!user) {
            return res.status(400).json({ message: 'Password reset token is invalid or has expired' });
        }
        const newPassword = await bcrypt.hash(req.body.password, 12);
        await User.updateOne(
            { _id: user._id },
            {
                $set: { password: newPassword },
                $unset: { resetPasswordToken: "", resetPasswordExpires: "" }
            }
        );
        res.json({ message: 'Password has been successfully reset' });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'An error occurred while resetting the password' });
    }
});

module.exports = router;
