chrome.runtime.onMessage.addListener((req, sender, sendRes) => {
    if (req.message === "laftel-noti") {
        ban(0);
    }
});

function ban(retryCnt) {
    let box = document.querySelector(".notification-list");
    if (box) {
        let notiList = box.querySelectorAll(".notification-item");
        for (let noti of notiList) {
            let ment = noti.querySelector(".ment");
            if (ment && ment.innerHTML.indexOf("작성한 리뷰를 좋아해요") >= 0) {
                noti.remove();
            }
        }
    } else if (retryCnt < 42) {
        setTimeout(() => ban(retryCnt + 1), 200);
    }
}