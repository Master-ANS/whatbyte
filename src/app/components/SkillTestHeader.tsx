"use client";

import Image from "next/image";
import { useState, FormEvent, Dispatch, SetStateAction } from "react";
import Modal from "./Modal";
import { formSchema } from "../Schemas/ZodValidation";
import { z } from "zod"; 

interface SkillTestHeaderProps {
    rank: number;
    setRank: Dispatch<SetStateAction<number>>;
    percentile: number;
    setPercentile: Dispatch<SetStateAction<number>>;
    score: number;
    setScore: Dispatch<SetStateAction<number>>;
}

// Define the error type to avoid TypeScript issues
interface FormErrors {
    rank?: string;
    percentile?: string;
    score?: string;
    [key: string]: string | undefined; // Add index signature
}

const SkillTestHeader = ({
    rank,
    setRank,
    percentile,
    setPercentile,
    score,
    setScore,
}: SkillTestHeaderProps) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [tempRank, setTempRank] = useState<number>(rank);
    const [tempPercentile, setTempPercentile] = useState<number>(percentile);
    const [tempScore, setTempScore] = useState<number>(score);
    
    // State for validation errors with proper type
    const [errors, setErrors] = useState<FormErrors>({});

    const openModal = () => {
        setTempRank(rank);
        setTempPercentile(percentile);
        setTempScore(score);
        setErrors({});
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setErrors({});
    };

    
    const validateField = (fieldName: string, value: any) => {
        try {
           
            const fieldSchema = z.object({ [fieldName]: formSchema.shape[fieldName as keyof typeof formSchema.shape] });
            fieldSchema.parse({ [fieldName]: value });
            
            
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[fieldName];
                return newErrors;
            });
        } catch (error) {
            if (error instanceof z.ZodError) {
            
                setErrors(prev => ({
                    ...prev,
                    [fieldName]: error.errors.find(e => e.path[0] === fieldName)?.message || "Invalid value"
                }));
            }
        }
    };

    const handleRankChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value === "" ? undefined : Number(e.target.value);
        setTempRank(value as number);
        validateField("rank", value);
    };

    const handlePercentileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value === "" ? undefined : Number(e.target.value);
        setTempPercentile(value as number);
        validateField("percentile", value);
    };

    const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value === "" ? undefined : Number(e.target.value);
        setTempScore(value as number);
        validateField("score", value);
    };

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const result = formSchema.safeParse({
            rank: tempRank,
            percentile: tempPercentile,
            score: tempScore,
        });

        if (!result.success) {
            // Format and set all errors
            const formattedErrors: FormErrors = {};
            result.error.errors.forEach(err => {
                if (err.path[0]) {
                    formattedErrors[err.path[0].toString()] = err.message;
                }
            });
            setErrors(formattedErrors);
            return;
        }

        setRank(tempRank);
        setPercentile(tempPercentile);
        setScore(tempScore);
        closeModal();
    };

    return (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <div className="mr-4">
                        <Image src="/HTML5.png" alt="HTML5 Logo" width={50} height={40} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-1">Hyper Text Markup Language</h2>
                        <p className="text-gray-600">
                            Questions: 15 | Duration: 15 mins | Submitted on 26 May 2025
                        </p>
                    </div>
                </div>
                <button 
                    className="bg-blue-900 cursor-pointer hover:bg-blue-900 text-white font-medium py-2 px-4 rounded"
                    onClick={openModal}
                    type="button"
                >
                    Update
                </button>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Update scores</h2>
                    <Image src="/HTML5.png" alt="HTML5 Logo" width={40} height={40} />
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-blue-700 text-white w-6 h-6 flex items-center justify-center rounded-full text-sm">
                                1
                            </div>
                            <label className="text-gray-700 font-semibold whitespace-nowrap">
                                Update your Rank
                            </label>
                            <input
                                type="number"
                                value={tempRank === undefined ? "" : tempRank}
                                onChange={handleRankChange}
                                className="border border-gray-300 rounded-md p-1 px-2 w-24 ml-auto focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>
                        {errors.rank && (
                            <div className="flex">
                                <div className="w-6 flex-shrink-0"></div>
                                <p className="text-red-500 text-xs mt-1 ml-4">{errors.rank}</p>
                            </div>
                        )}
                    </div>

                    <div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-blue-700 text-white w-6 h-6 flex items-center justify-center rounded-full text-sm">
                                2
                            </div>
                            <label className="text-gray-700 font-semibold whitespace-nowrap">
                                Update your Percentile
                            </label>
                            <input
                                type="number"
                                value={tempPercentile === undefined ? "" : tempPercentile}
                                onChange={handlePercentileChange}
                                className="border border-gray-300 rounded-md p-1 px-2 w-24 ml-auto focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>
                        {errors.percentile && (
                            <div className="flex">
                                <div className="w-6 flex-shrink-0"></div>
                                <p className="text-red-500 text-xs mt-1 ml-4">{errors.percentile}</p>
                            </div>
                        )}
                    </div>

                    <div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-blue-700 text-white w-6 h-6 flex items-center justify-center rounded-full text-sm">
                                3
                            </div>
                            <label className="text-gray-700 font-semibold whitespace-nowrap">
                                Update current score
                            </label>
                            <input
                                type="number"
                                value={tempScore === undefined ? "" : tempScore}
                                onChange={handleScoreChange}
                                className="border border-gray-300 rounded-md p-1 px-2 w-24 ml-auto focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>
                        {errors.score && (
                            <div className="flex">
                                <div className="w-6 flex-shrink-0"></div>
                                <p className="text-red-500 text-xs mt-1 ml-4">{errors.score}</p>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-end space-x-4 mt-8">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="cursor-pointer px-6 py-2 border border-gray-300 rounded-md font-semibold text-gray-700 hover:bg-gray-100"
                        >
                            cancel
                        </button>
                        <button
                            type="submit"
                            className="cursor-pointer px-6 py-2 bg-blue-900 hover:bg-blue-900 text-white rounded-md font-semibold flex items-center space-x-2"
                        >
                            <span>save</span>
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default SkillTestHeader;