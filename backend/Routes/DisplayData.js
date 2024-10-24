const express = require("express");
const router = express.Router();

router.post('/foodData', (req, res) => {
    try {
        // Log the global food items
        console.log(global.food_items);
        
        // Send the food items as JSON response
        res.send(global.food_items,global.foodCategory);
    } catch (error) {
        console.error("Error fetching food data:", error.message);
        
        // Send a 500 status code for server error
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
