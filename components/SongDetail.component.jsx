import styles from "../styles/Home.module.css";

import { Button } from "react-bootstrap";

export default function SongDetail({
  filteredSongList,
  handleClickToCopy,
  showBiliPlayer
}) {
  if (filteredSongList.length == 0) {
    return (
      <tr>
        <td className="display-6 text-center" colSpan="6" id="noSongInList">
          歌单里没有诶~隐藏歌单碰碰运气!
        </td>
      </tr>
    );
  }
  return filteredSongList.map((song) => (
    <tr
      className={
        song.paid
          ? styles.songRowPaid
          : song.sticky_top
          ? styles.songRowTop
          : styles.songRow
      }
      key={song.index}
      onClick={(e) => {
        handleClickToCopy(song);
      }}
    >
      <td className={styles.tableIconTd}>
        {song.sticky_top == 1 ? (
          <img
            src="/assets/icon/up_arrow.png"
            alt="置顶"
            className={styles.tableIcons}
            title="置顶曲目"
          ></img>
        ) : (
          <div></div>
        )}
        {song.paid == 1 ? (
          <img
            src="/assets/icon/orb.png"
            alt="付费"
            className={styles.tableIcons}
            title="付费曲目"
          ></img>
        ) : (
          <div></div>
        )}
      </td>
      <td
        className={styles.noWrapForce}
        id={song.paid ? `paid ${song.index}` : song.index}
      >
        {song.song_name}
      </td>
      <td className={styles.tableIconTd}>
        {song.BVID ? (
          <Button
            className={styles.customRandomButton}
            title="投稿歌切试听"
            style={{ marginTop: 0, padding: "0.25rem" }}
            onClick={(e) => {
              e.stopPropagation();
              showBiliPlayer(song)
            }}
          >
            <div className="d-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#1D0C26"
                className="bi bi-play-fill"
                viewBox="0 0 16 16"
              >
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
              </svg>
            </div>
          </Button>
        ) : (
          <div></div>
        )}
      </td>
      <td className={styles.noWrapForce}>{song.artist}</td>
      <td className={styles.noWrapForce}>{song.language}</td>
      <td className={styles.noWrapForce}>{song.remarks}</td>
    </tr>
  ));
}
