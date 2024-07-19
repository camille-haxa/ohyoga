import { useLoaderData } from "react-router-dom";

import "./AudioPage.css";

export default function AudioPage() {
  const audioData = useLoaderData();

  return (
    <>
      <h1 className="audio-title">Yoga nidra et méditations</h1>

      <div>
        {audioData?.map((audio) => (
          <div className="audiomap-container" key={audio.id}>
            {" "}
            <h3 className="audio-title2">{audio.title}</h3>
            <img className="audio-img" src={audio.image} alt="" />
            <audio controls>
              <source src={audio.url} type="audio/mp3" />
              <track kind="captions" />
            </audio>
            <p className="audio-description">{audio.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
