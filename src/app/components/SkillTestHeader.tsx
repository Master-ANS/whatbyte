
"use client";

import Image from "next/image";
import { useState, FormEvent, Dispatch, SetStateAction } from "react";
import Modal from "./Modal";
import { formSchema } from "../Schemas/ZodValidation"; 

interface SkillTestHeaderProps {
    rank: number;
    setRank: Dispatch<SetStateAction<number>>;
    percentile: number;
    setPercentile: Dispatch<SetStateAction<number>>;
    score: number;
    setScore: Dispatch<SetStateAction<number>>;
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

    const openModal = () => {
        setTempRank(rank);
        setTempPercentile(percentile);
        setTempScore(score);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const result = formSchema.safeParse({
            rank: tempRank,
            percentile: tempPercentile,
            score: tempScore,
        });

        if (!result.success) {
            alert(result.error.errors[0].message);
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
                    className="bg-blue-900 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded"
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
                    {[
                        { id: 1, label: "Update your Rank", value: tempRank, setValue: setTempRank },
                        { id: 2, label: "Update your Percentile", value: tempPercentile, setValue: setTempPercentile },
                        { id: 3, label: "Update current score", value: tempScore, setValue: setTempScore },
                    ].map((field) => (
                        <div key={field.id} className="flex items-center space-x-4">
                            <div className="bg-blue-700 text-white w-6 h-6 flex items-center justify-center rounded-full text-sm">
                                {field.id}
                            </div>
                            <label className="text-gray-700 font-semibold whitespace-nowrap">
                                {field.label}
                            </label>
                            <input
                type="number"
                value={field.value === undefined ? 0 : field.value}
                onChange={(e) => field.setValue(e.target.value === undefined ? 0 : e.target.value === "0" ? 0 : Number(e.target.value))}
                className="border border-gray-300 rounded-md p-1 px-2 w-24 ml-auto focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
                        </div>
                    ))}

                    <div className="flex justify-end space-x-4 mt-8">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="px-6 py-2 border border-gray-300 rounded-md font-semibold text-gray-700 hover:bg-gray-100"
                        >
                            cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-900 hover:bg-blue-900 text-white rounded-md font-semibold flex items-center space-x-2"
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
