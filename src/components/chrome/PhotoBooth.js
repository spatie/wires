import html2canvas from 'html2canvas';

export default function PhotoBooth() {
    function snap() {
        html2canvas(document.querySelector('[data-wires]')).then(canvas => {
            console.log(canvas.toDataURL('image/jpeg'));
        });
    }

    return (
        <div className="static h-10 px-2 flex items-center bg-black text-white rounded mr-2">
            <button className="flex block h-6 px-2 rounded-sm" onClick={snap}>
                <i className="fas fa-pencil-alt" style={{ transform: 'translateY(0.1rem)' }} />
            </button>
        </div>
    );
}
