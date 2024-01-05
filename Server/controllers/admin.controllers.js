import { Admin } from "../model/admin.js"
import { hashPassword } from "../utils/Bcrypt.js";



export const getAdmins = async (req, res) => {
    try {
        let Admins = await Admin.findAll()

        res.json(Admins)
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};


export const createAdmin = async (req, res) => {
    const { name, lastname, email, password, Role} = req.body;

    const passwordHash = await hashPassword(password)

    console.log(passwordHash)
    try {


        let newAdmin = new Admin(
            {
                name,
                lastname,
                email,
                password: passwordHash,
                Role
            });

        const adminSaved = await newAdmin.save();
        return res.json(adminSaved);

    } catch (error) {
        res.status(500).json({
        message: error.message,
    });
    }
}


export const getAdmin = async (req, res) => {
    const { id } = req.params;
    try {
        const admin = await Admin.findOne({ where: {id: id }});

        if (!admin) return res.status(404).json({message: "Admin does not exist"})

        res.json(admin);

    } catch (error) {
        res.status(500).json({
        message: error.message,
    });
    }
}

export const updateAdmin = async (req, res) => {
    const { id } = req.params; 
    try {

        if (req.body.password)req.body.password = await hashPassword(req.body.password);
        

        const Findadmin = await Admin.findOne({ where: { id: id } });

        if (Findadmin) {
            const updated = await Admin.update(req.body, {where: { id: id }});
            const updatedAdmin = await Admin.findOne({ where: { id: id } });
            res.json({ message: 'Admin updated successfully', Admin: updatedAdmin });
        } else {
            res.status(404).json({ message: 'Admin not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteAdmin = async (req, res) => {
    const { id } = req.params;
    try { 
    await Admin.destroy({where: {id: id}});
    return res.status(204).json({ message: 'Admin deleted successfully' });
    } catch (error) {
    return res.status(500).json({ message: error.message });
}
}