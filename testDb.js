const db = require('./models')

const testCRUD = async () => {
    try {
        // CREATE
        // const newBounty = new db.Bounty({
        //     name: 'Han Solo',
        //     wantedFor: 'He\'s always wanted',
        //     client: 'The Empire',
        //     ship: 'Millenium Falcon',
        //     reward: 1000000,
        //     captured: false,
        //     lastSeen: 'Hoth'
        // })

        // await newBounty.save()
        // READ
        const foundBounty = await db.Bounty.findOne({
            name: 'Han Solo'
        })

        console.log(foundBounty)
        // UPDATE
        const updatedBounty = await db.Bounty.findOneAndUpdate(
            { name: "Darth Eric" },
            { wantedFor: "Never watching LOTR", client: "Tyler", reward: 10, captured: false, lastSeen: "He is here right now", ship: "Toyota Prius" },
            { new: true, upsert: true }
        )
        
        console.log(updatedBounty)

        // DESTROY
        const deleted = await db.Bounty.findOneAndDelete({ name: "Han Solo" })
        console.log(deleted)
    } catch (err) {
        console.log(err)
    }
}

testCRUD()