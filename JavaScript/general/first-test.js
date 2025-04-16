function removeDuplicates(arr) {
    let number = []
    let temp = []

    for (let i = 0; i < arr.length; i++) {
        if (i === i) {
            i += temp
        } else {
            i += number
        }
    }
}
removeDuplicates([1, 2, 2, 3, 4, 4, 5])


app.get('/user/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Internal error' });
    }
});

