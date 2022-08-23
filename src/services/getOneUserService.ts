import {userRepository} from "../userRepository/userRepository"

const getOneUserService = async (id:string) => {
    const user = await userRepository.findOne({where:{id}})
    return user
}

export default getOneUserService