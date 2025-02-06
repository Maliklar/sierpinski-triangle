import { Box, Slider, Typography } from "@mui/material";
import useCanvas from "../../store/useCanvas";
import styles from "./styles.module.scss";
import ColorPicker from "react-pick-color";

export default function SideBar() {
  const { setSides, sides, speed, setSpeed, color, setColor } = useCanvas();
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
        <Box>
          <Typography id="track-false-slider" gutterBottom>
            Speed ({speed})
          </Typography>
          <Slider
            defaultValue={0}
            min={1}
            max={1000}
            onChange={(_, v) => {
              if (!isNaN(+v)) setSpeed(+v);
            }}
            valueLabelDisplay="auto"
          />
        </Box>
        <Box>
          <ColorPicker
            color={color}
            onChange={(color) => setColor(color.hex)}
            hideAlpha
            hideInputs
          />
          {color}
        </Box>
      </Box>
    </aside>
  );
}
