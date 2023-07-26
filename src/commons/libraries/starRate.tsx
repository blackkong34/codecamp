import styled from "@emotion/styled";
import { useEffect, useState } from "react";

export default function StarRate() {
  const [popularity, setPopularity] = useState(3.2);
  const STAR_IDX_ARR = ["1", "2", "3", "4", "5"];
  const [ratesResArr, setRatesResArr] = useState([0, 0, 0, 0, 0]);
  const calcStarRates = () => {
    let tempStarRatesArr = [0, 0, 0, 0, 0];
    let starVerScore = (popularity * 120) / 5;
    let idx = 0;
    while (starVerScore > 24) {
      tempStarRatesArr[idx] = 24;
      idx += 1;
      starVerScore -= 24;
    }
    tempStarRatesArr[idx] = starVerScore;
    return tempStarRatesArr;
  };
  useEffect(() => {
    setRatesResArr(calcStarRates);
  }, []);
  return (
    <Rate>
      {STAR_IDX_ARR.map((item, idx) => {
        return (
          <StarIcon key={`${idx}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#bdbdbd"
            >
              <clipPath id={`${item}`}>
                <rect width={`${ratesResArr[idx]}`} height="39" />
              </clipPath>
              <path
                id={`${item}Star`}
                d="M12 2L14.2451 8.90983H21.5106L15.6327 13.1803L17.8779
                20.0902L12 15.8197L6.12215 20.0902L8.36729 13.1803L2.48944
                8.90983H9.75486L12 2Z"
              />
              <use
                clipPath={`url(#${item})`}
                href={`#${item}Star`}
                fill="#ffd600"
              />
            </svg>
          </StarIcon>
        );
      })}
    </Rate>
  );
}

const Rate = styled.div`
  display: flex;
  justify-content: conter;
  align-items: center;
  padding-top: 2px;
  width: 100%;
`;
const StarIcon = styled.span`
  display: inline-flex;
  text-align: center;
`;
