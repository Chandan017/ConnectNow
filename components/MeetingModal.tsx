import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  img?: string;
  buttonIcon?: string;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  handleClick,
  buttonText,
  img,
  buttonIcon,
}: MeetingModalProps) => {
    
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white">
        <div className="flex flex-col gap-6">
            {img && (
                <div className="flex justify-center">
                    <Image 
                    src={img}
                    width={72}
                    height={72}
                    alt="Image"
                    />
                </div>
            )}
            <h1 className={cn('text-3xl font-bold leading-[42px]' , className)}>{title}</h1>
            {children}
            <Button className="bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0" onClick={handleClick}>
                {buttonIcon && (
                    <Image src={buttonIcon} height={13} width={13} alt="button-icon"/>
                )} &nbsp;
                {buttonText || "Schedule Meeting"}
            </Button>

        </div>
       
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
