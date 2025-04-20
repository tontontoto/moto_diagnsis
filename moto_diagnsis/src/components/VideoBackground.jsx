function VideoBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-fixed after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(black_20%,transparent_20%),radial-gradient(black_20%,transparent_20%)] after:bg-[length:6px_6px] after:bg-[position:0_0,3px_3px] after:bg-repeat">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                poster="img/movie.jpg"
                playsInline
                muted
                autoPlay
                loop
            >
                <source src="move.mp4" type="video/mp4" />
            </video>
        </div>
    );
}
export default VideoBackground