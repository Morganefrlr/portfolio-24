import { infos } from "./leftCardConfig";


const BoxInfos = () => {
    return (
        <div className="blocInfos">
        {infos.map((item) => (
          <div key={item.label}>
            <div />
            <p>{item.label}</p>
            <p>{item.info}</p>
          </div>
        ))}
      </div>
    );
};

export default BoxInfos;