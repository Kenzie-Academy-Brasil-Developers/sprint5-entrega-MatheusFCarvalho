import {userRepository} from "../userRepository/userRepository"

const getAllUsersService = async () => {

    const users = await userRepository.find()
    return users
}
export default getAllUsersService