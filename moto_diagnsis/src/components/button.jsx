function Button(props) {
    return (
        <>
            <div className="rounded-2xl bg-[#de5947] text-white">
                <a href="/diagnosis">
                    <button className="cursor-pointer px-4 py-2">
                        {props.btn_text}
                    </button>
                </a>
            </div>
        </>
    )
}

export default Button