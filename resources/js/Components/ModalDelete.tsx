import { useForm } from "@inertiajs/react";
import { router } from "@inertiajs/react";

const ModalDelete: React.FC<ModalComponentProps> = ({ id, vg }) => {
  const { data: deleteData, setData: setDeleteData, processing, reset } = useForm({
    vg_id: vg.id,
    title: vg.title,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    router.delete(`/deleteVg/${deleteData.vg_id}`, {
      onSuccess: () => {
        reset();
        const dialog = document.getElementById(`my_modal_4${vg.id}`) as HTMLDialogElement | null;
        if (dialog) dialog.close(); // Close modal after successful deletion
      },
    });
  };

  return (
    <>
      <button
        onClick={() => (document.getElementById(`my_modal_4${vg.id}`) as HTMLDialogElement | null)?.showModal()}
        className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 focus:bg-red-800 active:bg-red-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150"
      >
        Delete
      </button>
      <dialog id={id} className="modal">
        <div className="modal-box bg-slate-50">
          <div className="modal-header">
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => reset()}
              >
                ✕
              </button>
            </form>
          </div>
          <div className="modal-body">
            <h3 className="font-bold text-lg">
              Are you sure you want to delete {deleteData.title} Details?
              <small className="block">id: {deleteData.vg_id}</small>
            </h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              <button
                className="w-full text-center items-center px-4 py-2 bg-red-600 hover:bg-red-700 focus:bg-red-800 active:bg-red-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150"
                disabled={processing}
              >
                Confirm Delete
              </button>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn text-black border-0 bg-gray-300 hover:bg-gray-400"
                onClick={() => reset()}
              >
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
};

export default ModalDelete;
