import {axiosInstance} from '@/utils/axios';

export const apiGenerateTriangle = async (inputVal) => {
    return await axiosInstance.post('/generate-triangle', {
        input: inputVal
    })
}

export const apiGenerateOddNumber = async (inputVal) => {
    return await axiosInstance.post('/generate-odd-number', {
        input: inputVal
    })
}


export const apiGeneratePrismaNumber = async (inputVal) => {
    return await axiosInstance.post('/generate-prisma-number', {
        input: inputVal
    })
}