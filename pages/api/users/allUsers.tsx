import type { NextApiRequest, NextApiResponse } from 'next'
//import { getAllUsers } from '../../../models/userModel';


// export default async function (req: NextApiRequest, res: NextApiResponse) {
//     const data = await getAllUsers
//     res.status(200).json(data.rows)
// }

export default async function (req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({"name":"vinod"})
}


// export default async (req:NextApiRequest, res:NextApiResponse) => {
//     switch(req.method){
//         case 'GET':
//             const data = await getAllUsers
//             return res.status(200).json(data.rows);
//         case 'POST':
//             ///////////////////////////////////////////////////////////////
//             ///////////////////////////////////////////////////////////////
//         default:
//             return res.status(500).json({
//                 message: 'Method not allowed'
//             })
//     }
// }