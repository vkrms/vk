import { VK } from 'vk-io';



const token = process.env.TOKEN;
const myPersonalId = '6379360';

const vk = new VK({
    token,
});

async function run() {
    const response = await vk.api.wall.get({
        owner_id: myPersonalId,
    });

    console.log(response);
    return response
}

// export default function (req, res) {
    // run().catch(console.log).then((vkRes) => {
    //     res.status(200).json({ name: 'John Doe', vkRes, })
    // })
// }

export default eventHandler((event) => {
    return run()
        .catch(console.log)
        .then((vkRes) => {
            console.log({vkRes})
            return vkRes
        })

    // return { name: 'John Doe', token, }
})