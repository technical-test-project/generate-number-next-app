'use client'

import {Button, Input, InputNumber} from 'antd';
import {useState} from 'react';
import {apiGenerateOddNumber, apiGeneratePrismaNumber, apiGenerateTriangle} from '@/actions/api';

export default function Home() {
    const [input, setInput] = useState<number>();
    const [output, setOutput] = useState<[]>([]);


    const generateTriangle = async () => {
        if (input === '' || input == undefined) {
            alert('Silahkan input angka');
        }

        const response = await apiGenerateTriangle(input)
        setOutput(response.data)
    }


    const generateOddNumber = async () => {
        if (input === '' || input == undefined ) {
            alert('Silahkan input angka');
        }

        const response = await apiGenerateOddNumber(input)
        setOutput(response.data)
    }


    const generatePrismaNumber = async () => {
        if (input === '' || input == undefined) {
            alert('Silahkan input angka');
        }

        const response = await apiGeneratePrismaNumber(input)
        setOutput(response.data)
    }



    return (
        <div className="container w-1/2">

            <div className="p-20 space-y-4">

                <Input type="number" className="w-[200px]" placeholder="Input angka"  onChange={(e: any) => setInput(e.target.value)}/>

                <div className="flex space-x-3">
                    <Button type="default" onClick={() => generateTriangle()}>Generate Segitiga</Button>
                    <Button type="default" onClick={() => generateOddNumber()}>Generate Bilangan Ganjil</Button>
                    <Button type="default" onClick={() => generatePrismaNumber()}>Generate Bilangan Prima</Button>
                </div>

                <div className="space-y-4">
                    <span className="text-xl font-bold text-gray-900">Result: </span>

                    {!output
                        ? (
                            <div>Hasil....</div>
                        )
                        : (

                            <pre>{output.join('\n')}</pre>
                        )
                    }

                </div>
            </div>

        </div>
    );
}
