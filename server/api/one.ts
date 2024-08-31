import { VK } from 'vk-io';

const vk = new VK({
    token: process.env.TOKEN
});

async function run() {
    const response = await vk.api.wall.get({
        owner_id: 1
    });

    console.log(response);
    return response
}

export default function (req, res) {
    run().catch(console.log).then((vkRes) => {
        res.status(200).json({ name: 'John Doe', vkRes, })
    })
}