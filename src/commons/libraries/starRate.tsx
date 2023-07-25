import styled from "@emotion/styled";
import { useState } from "react";

export default function StarRate() {
  const AVR_RATE = 80;
  const STAR_IDX = ["1st", "2nd", "3rd", "4th", "5th"];
  const [rates, setRates] = useState([4, 2, 1.5, 3.4, 5]);
  const calRates = () => {
    let tempRatesArr = [0, 0, 0, 0, 0];
    let starScore = (AVR_RATE * 6) / 5;
    let idx = 0;
    while (starScore > 24) {
      tempRatesArr[idx] = 14;
      idx += 1;
      starScore -= 24;
    }
    tempRatesArr[idx] = starScore;
    return tempRatesArr;
  };
  return (
    <Rate>
      {STAR_IDX.map((item, idx) => (
        <StarIcon key={item}>
          <span className="star_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#BDBDBD"
            >
              <clipPath id={`&{item}StarClip`}>
                <rect width={rates[idx]} height="24" />
              </clipPath>
              <path
                id={`&{item}StarClip`}
                d="M12 2L14.2451 8.90983H21.5106L15.6327 13.1803L17.8779 20.0902L12 15.8197L6.12215 20.0902L8.36729 13.1803L2.48944 8.90983H9.75486L12 2Z"
              />
              <use
                clipPath={`url(#&{item}StarClip)`}
                href="#firstStar"
                fill="#ffd600"
              />
            </svg>
          </span>
        </StarIcon>
      ))}
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
