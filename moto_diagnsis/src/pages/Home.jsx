// components
import Button from "../components/button"
import Header from "../components/header"
import VideoBackground from "../components/VideoBackground"

function Home() {
    return (
        <>
            <VideoBackground />
            <div className="min-h-screen flex flex-col justify-center items-center text-center">
                <h1
                    className="text-6xl text-white text-shadow-[#666] font-Michroma"
                    style={{ fontFamily: "'Michroma', sans-serif" }}
                >
                    MOTORCYCLE　DIAGNOSIS</h1>
                <p 
                    className="mt-4 text-2xl text-left p-10 m-5 text-white fixed bottom-10 left-10"
                    style={{ fontFamily: "'NotoSansJP', sans-serif"}}    
                >
                    最高のバイクライフのために、<br />
                    あなたにピッタリのバイクを見つけます。</p>
                <div className="mt-50">
                    <Button btn_text="診断スタート"></Button>
                </div>
            </div>
        </>
    )
}

export default Home