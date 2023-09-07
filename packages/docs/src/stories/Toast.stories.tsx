import { Button, Toast, ToastProps } from "@emarra-ui/react";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps, useEffect, useRef, useState } from "react";

type ToastDemoProps = ComponentProps<typeof Toast>

const ToastDemo = (props: ToastDemoProps) => {
    const [open, setOpen] = useState(false);
    const timerRef = useRef(0);

    useEffect(() => {
        return () => clearTimeout(timerRef.current);
      }, []);

    function oneWeekAway() {
        const now = new Date();
        const inOneWeek = now.setDate(now.getDate() + 7);
        return new Date(inOneWeek);
      }
        
    return (
        <div>
            <Button
                onClick={() => {
                    setOpen(false)
                    window.clearTimeout(timerRef.current)
                    timerRef.current = window.setTimeout(() => {
                        setOpen(true)
                    }, 100)                      
                }}
            >Add to calendar</Button>
            <Toast open={open} onOpenChange={setOpen} {...props}/>
        </div>
    );
};

export default {
    title: 'Form/Toast',
    component: ToastDemo,

    args: {
     title: 'Agendamento realizado',
      description: 'quarta-feira, 07 de setembro de 2023 às 10:00',
    },
}as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}