import React from 'react'
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { router } from "@inertiajs/react";


const AddGameButton: React.FC<AddVGComponentProps> = ({ className = "", disabled }) => {
    const { data, setData, reset, errors, processing } =
        useForm({
            title: "",
            release_date: "",
            developer: "",
            publisher: "",
            product_rating: "",
            user_score: 0,
            platforms : [],
            genres : ""
        });

    const submit = (e: any) => {
        e.preventDefault();

        router.post("/addVg", data, {
            onSuccess: () => {
                reset(); // Reset the form fields
                (document.getElementById("my_modal_2") as HTMLDialogElement)?.close(); // Close the modal
            },
        });
    };

    return (
        <>
            <button onClick={() => (document.getElementById("my_modal_2") as HTMLDialogElement | null)?.showModal()} className={`inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 focus:bg-green-800 active:bg-green-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest  focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className} disabled={disabled}>
                Add New Game
            </button>

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box bg-slate-50">
                    <div className="modal-header">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => reset()}>
                                ✕
                            </button>
                        </form>
                    </div>
                    <div className="modal-body">
                        <h3 className="font-bold text-lg">Add New Game</h3>
                        <form onSubmit={submit} className="mt-6 space-y-6">
                            {/* Title */}
                            <div>
                                <InputLabel htmlFor="title" value="Title" />

                                <TextInput id="title" className="mt-1 block w-full" value={data.title} onChange={(e) => setData("title", e.target.value)} required isFocused autoComplete="title" />

                                <InputError className="mt-2" message={errors.title} />
                            </div>

                            {/* Developer */}
                            <div>
                                <InputLabel htmlFor="developer" value="Developer" />

                                <TextInput id="developer" className="mt-1 block w-full" value={data.developer} onChange={(e) => setData("developer", e.target.value)} isFocused autoComplete="developer" />

                                <InputError className="mt-2" message={errors.developer} />
                            </div>

                            {/* Publisher */}
                            <div>
                                <InputLabel htmlFor="publisher" value="Publisher" />

                                <TextInput id="publisher" className="mt-1 block w-full" value={data.publisher} onChange={(e) => setData("publisher", e.target.value)} isFocused autoComplete="publisher" />

                                <InputError className="mt-2" message={errors.publisher} />
                            </div>

                            {/* User Score */}
                            <div>
                                <InputLabel htmlFor="user_score" value="User Score" />

                                <TextInput id="user_score" type="number" step={"0.1"} className="mt-1 block w-full" value={data.user_score} onChange={(e) => setData("user_score", parseFloat(e.target.value))} isFocused autoComplete="user_score" />

                                <InputError className="mt-2" message={errors.user_score} />
                            </div>

                            {/* User Score */}
                            <div>
                                <InputLabel htmlFor="release_date" value="Release Date" />

                                <TextInput id="release_date" type="date" className="mt-1 block w-full" value={data.release_date} onChange={(e) => setData("release_date", e.target.value)} isFocused autoComplete="release_date" />

                                <InputError className="mt-2" message={errors.release_date} />
                            </div>

                            <button className={`w-full text-center items-center px-4 py-2 bg-green-600 hover:bg-green-700 focus:bg-green-800 active:bg-green-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest  focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && "opacity-25"} `} disabled={processing}>
                                Add New Game
                            </button>
                        </form>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn text-black border-0 bg-gray-300 hover:bg-gray-400" onClick={() => reset()}>
                                Close
                            </button>
                        </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button onClick={() => reset()}></button>
                </form>
            </dialog>
        </>
    );
}

export default AddGameButton