import { Box, Slider, Typography } from "@mui/material";
import useCanvas from "../../store/useCanvas";
import styles from "./styles.module.scss";

export default function SideBar() {
  const { setSides, sides, speed, setSpeed } = useCanvas();
  return (
    <aside className={styles.container}>
      <Box>
        <Typography id="track-false-slider" gutterBottom>
          Sides ({sides})
        </Typography>
        <Slider
          defaultValue={3}
          min={3}
          max={100}
          onChange={(_, v) => {
            if (!isNaN(+v)) setSides(+v);
          }}
          valueLabelDisplay="auto"
        />

        <Typography id="track-false-slider" gutterBottom>
          Sides ({speed})
        </Typography>
        <Slider
          defaultValue={1}
          min={1}
          max={1000}
          onChange={(_, v) => {
            if (!isNaN(+v)) setSpeed(+v);
          }}
          valueLabelDisplay="auto"
        />
      </Box>
    </aside>
  );
}
