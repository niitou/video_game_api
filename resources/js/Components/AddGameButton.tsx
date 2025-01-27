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
        });

    const submit = (e: any) => {
        e.preventDefault();

        router.post("/addVg", data, {
            onSuccess: () => { },
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
                            <button
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={() => reset()}
                            >
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