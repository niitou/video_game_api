import { useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { router } from "@inertiajs/react";

const ModalUpdate: React.FC<ModalComponentProps> = ({ id, vg }) => {
  const { data: editData, setData: setEditData, processing, reset } = useForm({
    title: vg.title,
    release_date: vg.release_date,
    developer: vg.developer,
    publisher: vg.publisher,
    product_rating: vg.product_rating,
    user_score: vg.user_score,
    genres: vg.genres,
    platforms: vg.platforms,
    // Sill missing genres and platforms
  });

  // Update the form data whenever the `vg` prop changes
  useEffect(() => {
    setEditData("title", vg.title);
    setEditData("user_score", vg.user_score);
    setEditData("developer", vg.developer);
    setEditData("product_rating", vg.product_rating);
    setEditData("publisher", vg.publisher);
    setEditData("release_date", vg.release_date);
  }, [vg]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    router.patch(`/updateVg/${vg.id}`, editData, {
      onSuccess: () => {
        const dialog = document.getElementById(`my_modal_3${vg.id}`) as HTMLDialogElement | null;
        if (dialog) dialog.close(); // Close modal after successful update
        reset(); // Reset form data
      },
      onError: (errors) => {
        console.error(errors); // Log any validation or server errors
      },
    });
  };

  return (
    <>
      <button onClick={() => (document.getElementById(`my_modal_3${vg.id}`) as HTMLDialogElement | null)?.showModal()} className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:bg-blue-800 active:bg-blue-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150">
        Update
      </button>
      <dialog id={id} className="modal">
        <div className="modal-box bg-slate-50">
          <div className="modal-header">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => reset()}>
                ✕
              </button>
            </form>
          </div>
          <div className="modal-body">
            <h3 className="font-bold text-lg">Update Video Game</h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              <div>
                <label className="block text-sm font-medium">Title:</label>
                <input type="text" value={editData.title} onChange={(e) => setEditData("title", e.target.value)} className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>

              <div>
                <label className="block text-sm font-medium">Release Date:</label>
                <input type="date" value={editData.release_date?.split("T")[0]} onChange={(e) => setEditData("release_date", e.target.value)} className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>

              <div>
                <label className="block text-sm font-medium">Developer:</label>
                <input type="text" value={editData.developer} onChange={(e) => setEditData("developer", e.target.value)} className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>

              <div>
                <label className="block text-sm font-medium">Publisher:</label>
                <input type="text" value={editData.publisher} onChange={(e) => setEditData("publisher", e.target.value)} className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>

              <div>
                <label className="block text-sm font-medium">Product Rating:</label>
                <select value={editData.product_rating} onChange={(e) => setEditData("product_rating", e.target.value)} className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                  <option value="" disabled>
                    Select a rating
                  </option>
                  {[
                    { value: "C", text: "Child (C)" },
                    { value: "E", text: "Everyone (E)" },
                    { value: "E+10", text: "Everyone 10+ (E+10)" },
                    { value: "T", text: "Teen (T)" },
                    { value: "M", text: "Mature (M)" },
                    { value: "Ao", text: "Adults Only (Ao)" },
                  ].map((rating) => (
                    <option key={rating.value} value={rating.value}>
                      {rating.text}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium">User Score:</label>
                <input type="number" step={"0.1"} value={editData.user_score} onChange={(e) => setEditData("user_score", e.target.value)} className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>

              <div>
                <label className="block text-sm font-medium">Genres:</label>
                <input type="text" value={editData.genres} onChange={(e) => setEditData("genres", e.target.value)} className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>

              <button type="submit" className="w-full text-center items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:bg-blue-800 active:bg-blue-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150" disabled={processing}>
                Confirm Update
              </button>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
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
};

export default ModalUpdate;
