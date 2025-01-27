import Authenticated from '@/Layouts/AuthenticatedLayout'
import AddGameButton from "@/Components/AddGameButton";
import ModalUpdate from "@/Components/ModalUpdate";
import ModalDelete from "@/Components/ModalDelete";

function VGDashboard({ vgData, count }) {
    return (
        <Authenticated header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                Video Game Dashboard
            </h2>
        }>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <span>
                                Total Video Game:{" "}
                                {count == 0 ? "No video game yet" : count}
                            </span>
                            <AddGameButton className="float-end" disabled={false} />
                        </div>
                        <table className="table">
                            {/* head */}
                            <thead className="text-black">
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Developer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vgData.map((vg) => (
                                    <tr className="text-black hover:bg-slate-300" key={vg.id}>
                                        <td>{vg.title}</td>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div>
                                                    {vg.developer}
                                                </div>
                                            </div>
                                        </td>
                                        <td>{vg.publisher}</td>
                                        <th className="flex gap-3">
                                            {/* Modal */}
                                            <ModalUpdate id={`my_modal_3${vg.id}`} vg={vg} />
                                            <ModalDelete id={`my_modal_4${vg.id}`} vg={vg} />
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}

export default VGDashboard