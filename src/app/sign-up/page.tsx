import Footer from "@/components/layout/main/Footer";
import Navbar from "@/components/layout/main/Navbar";
import RegisterForm from "@/components/component/auth/RegisterForm";


const SignUpPage = () => {
    return (
        <main>
            <Navbar />
            <RegisterForm />
            <Footer />
        </main>
    );
};

export default SignUpPage;