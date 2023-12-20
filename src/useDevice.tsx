import { useEffect, useState } from "react";
import { DeviceMode } from "./App";

const DEVICE_SWITH = 770;

export default function useDevice(): DeviceMode{
    const [device, setDevice] = useState<DeviceMode>("desktop");
    
    function getDevice(width: number): DeviceMode{
        return width > DEVICE_SWITH ? "desktop" : "mobile";
    }

    useEffect(() => {
        setDevice(getDevice(window.innerWidth));
        window.addEventListener("resize", () => setDevice(getDevice(window.innerWidth)))
    }, [])

    return device;
}