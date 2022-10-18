import './modal.css'

function Modal({closeModal}) {
	return (
		<div className="modal">
			<div className="modal__dimmed" onClick={closeModal}></div>
			<div className="modal__container">
				<button className="modal__button-left" data-dir="left">L</button>
				<div className="modal__panel">
					<h1 className="title">
						<i className="fa-solid fa-square-full"></i>
						당신의 시간을 찾아 줄 <strong>뽀모도로 타이머</strong>
					</h1>
					<p className="description">
						한 가지 일에 집중하기 힘들지 않나요? <br />
						일이 쌓여갈수록 조급한 마음에 시간관리가 더욱 어려워지죠. <br />
						집중이 필요한 시간에 다른 것들은 잠시 미뤄두고 한 가지에만 집중할 수 있는 <br />
						뽀모도로 타이머로 오늘 수행할 일들은 차곡차곡 해결해 보세요. <br />
						당장 뽀모를 켜세요, 소중한 시간이 돌아옵니다. <br />
					</p>
				</div>
				<div className="modal__panel active">
					<div className="greeting">
						<p className="greeting__row fadeInUp animated">만나서 반갑습니다.</p>
						<p className="greeting__row fadeInUp animated">성장하는 개발자</p>
						<p className="greeting__row fadeInUp animated">김민아입니다.</p>
					</div>
					<div className="contact">
						<p className="contact__github">
							<i className="fa-brands fa-github"></i>
						</p>
						<p className="contact__velog">
							<i className="fa-brands fa-vimeo"></i>
						</p>
					</div>
					<div className="copyrights">
						<p className="">
							이 포트폴리오는 <a href="https://cactus.tistory.com/306">프리텐다드 폰트</a>를 사용하였습니다.
						</p>
						<p className="">copyright ⓒ 2022 Mina Kim, All Rights Reserved </p>
					</div>
				</div>
				<button className="modal__button-right" data-dir="right">R</button>
			</div>
		</div>
	)
}

export default Modal
