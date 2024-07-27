import {Copy, Play} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


export function VideoPlayer() {
    return (
        <Dialog className="w-full h-full">
            <DialogTrigger asChild>
                <Play size={20} className="text-pink-500" />
            </DialogTrigger>
            <DialogContent className="w-full h-1/2 ">
                <iframe
                    className="w-full h-full p-2"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/5qap5aO4i9A"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </DialogContent>
        </Dialog>
    )
}
