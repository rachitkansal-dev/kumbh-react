const express = require('express');
const router = express.Router();
const { validate, upload } = require('../middleware');
require('dotenv').config();
const { Item, Item2 } = require('../models/item');
const {Commentlf} = require('../models/blog');

// Lost and found admin solve page
router.get('/adminsolve', (req, res) => {
    res.json({ message: 'Admin Solve Page Endpoint' });
});

// Main lost and found page
router.get('/main', (req, res) => {
    res.json({ message: 'Main Lost and Found Page Endpoint' });
});

// Lost and found page
router.get('/landf', (req, res) => {
    res.json({ message: 'Lost and Found Page Endpoint' });
});

// Form page
router.get('/form', (req, res) => {
    res.json({ message: 'Form Page Endpoint' });
});

// Add new item
router.post('/items', upload.single('photo'), async (req, res) => {
    try {
        const newItem = new Item({
            landf: req.body.landf,
            title: req.body.title,
            type: req.body.type,
            description: req.body.description,
            location: req.body.location,
            date: req.body.date,
            contact: req.body.contact,
            photo: req.file ? `/uploads/${req.file.filename}` : null
        });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        console.error('Error saving item:', error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

// Get items by type
router.get('/type/:id', async (req, res) => {
    try {
        const type = req.params.id;
        const itemsOfType = await Item.find({ type: { $regex: new RegExp(type, 'i') } });
        res.json(itemsOfType );
    } catch (error) {
        console.error('Error retrieving items by type:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Get items by location and optional filters
router.get('/location/:id', async (req, res) => {
    try {
        const location = req.params.id;

        // Basic validation
        if (!location || typeof location !== 'string') {
            return res.status(400).json({ message: 'Invalid location parameter' });
        }

        const itemsByLocation = await Item.find({ location: { $regex: new RegExp(location, 'i') } });
        res.json(itemsByLocation);
    } catch (error) {
        console.error('Error retrieving items by location:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Get items by type, location, and lost/found status with optional filters
router.get('/search', async (req, res) => {
    try {
        const { type, location, landf } = req.query;
        
        // Build a dynamic filter object
        const filter = {};
        
        // Add type to the filter if provided
        if (type) {
            filter.type = { $regex: new RegExp(type, 'i') };
        }
        
        // Add location to the filter if provided
        if (location) {
            filter.location = { $regex: new RegExp(location, 'i') };
        }
        
        // Add lost/found status to the filter if provided
        if (landf) {
            filter.landf = { $regex: new RegExp(landf, 'i') };
        }

        // Find items matching the filter
        const items = await Item.find(filter);
        res.json(items);
    } catch (error) {
        console.error('Error retrieving items by filters:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});




// Claim an item
router.post('/claim-item', async (req, res) => {
    try {
        const newClaimedItem = new Item2({
            id: req.body.userid,
            description: req.body.description,
            contact: req.body.contact
        });
        await newClaimedItem.save();
        res.status(201).json(newClaimedItem);
    } catch (error) {
        console.error('Error saving claimed item:', error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

// Get all claimed items
router.get('/claim-item', async (req, res) => {
    try {
        const items = await Item2.find();
        res.json(items);
    } catch (error) {
        console.error('Error retrieving items:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Get all claim requests with corresponding items
router.get('/admin-claim-requests', async (req, res) => {
    try {
        const claims = await Item2.find();
        const itemsWithClaims = [];
        for (let claim of claims) {
            const foundItem = await Item.findById(claim.id);
            if (foundItem) {
                itemsWithClaims.push({
                    foundItem: foundItem,
                    claim: claim
                });
            }
        }
        res.json(itemsWithClaims);
    } catch (error) {
        console.error('Error retrieving claim requests with items:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Delete a claimed item
router.delete('/claim-item/:id', async (req, res) => {
    try {
        const claimId = req.params.id;
        const deletedClaim = await Item2.findByIdAndDelete(claimId);
        if (!deletedClaim) {
            return res.status(404).json({ message: 'Claim not found' });
        }
        res.status(200).json({ message: 'Claim deleted successfully' });
    } catch (error) {
        console.error('Error deleting claim:', error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

// Get all items
router.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        console.error('Error retrieving items:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Get item details by ID
router.get('/items/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.json(item);
    } catch (error) {
        console.error('Error retrieving item by ID:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});


// Item list page
router.get('/itemlist', (req, res) => {
    res.json({ message: 'Item List Page Endpoint' });
});

// Delete a found item and its claims
router.delete('/found-item/:id', async (req, res) => {
    try {
        const itemId = req.params.id;
        const deletedItem = await Item.findByIdAndDelete(itemId);
        if (!deletedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        await Item2.deleteMany({ id: itemId });
        res.status(200).json({ message: 'Item and associated claims deleted successfully' });
    } catch (error) {
        console.error('Error deleting item and claims:', error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});



router.post('/addcomment', async (req, res) => {
    const { username, commentText } = req.body;

    // Validate input
    if (!username || !commentText) {
        return res.status(400).json({ message: 'Username and comment text are required.' });
    }

    try {
        // Create a new comment instance using the Commentlf model
        const newComment = new Commentlf({ username, commentText });
        
        // Save the comment to the database
        await newComment.save();
        
        // Respond with the newly created comment
        res.status(201).json({
            message: 'Comment posted successfully',
            comment: newComment
        });
    } catch (error) {
        res.status(500).json({ message: 'Error saving comment', error });
    }
});

// Route to fetch all comments
// Route to fetch all comments
router.get('/lfcomments', async (req, res) => {
    try {
        // Retrieve all comments from the database
        const comments = await Commentlf.find(); // Use appropriate query if needed
        
        // Respond with the list of comments
        res.status(200).json(
            comments
        );
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving comments', error });
    }
});

module.exports = router;
