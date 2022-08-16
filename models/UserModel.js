import mongoose from "mongoose";
 
const User = mongoose.Schema({
    Nama:{
        type: String,
        required: true
    },
    NIM:{
        type: String,
        required: true
    },
    Kelas:{
        type: String,
        required: true
    },
    Semester:{
        type: String,
        required: true
    },
    JenisKelamin:{
        type: String,
        required: true
    },
    Alamat:{
        type: String,
        required: true
    }
});
 
export default mongoose.model('Users', User);