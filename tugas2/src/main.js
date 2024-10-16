let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title == "") {
      alert("Inputan masih kosong");
      return;
   }
   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `flex justify-between items-center space-y-2 p-2 border-b`;
   task.innerHTML = `
         <p class="flex-grow ">${title}</p>
         <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}"
                class="bg-green-400 text-white px-4 py-1 rounded ml-2 btn-selesai">
         <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}"
                class="bg-red-400 text-white px-4 py-1 rounded ml-2 btn-hapus">
                
   `;
   output.appendChild(task);
   input.value = "";
   e.preventDefault();
}
