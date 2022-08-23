import { userRepository } from "../userRepository/userRepository"

const deleteUserService = async (id:string) => {
    await userRepository.delete({id})
}

export default deleteUserService