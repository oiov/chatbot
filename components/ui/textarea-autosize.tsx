"use client"
import { cn } from "@/lib/utils"
import { FC, useEffect } from "react"
import ReactTextareaAutosize from "react-textarea-autosize"

interface TextareaAutosizeProps {
  value: string
  onValueChange: (value: string) => void

  textareaRef?: React.RefObject<HTMLTextAreaElement>
  className?: string

  placeholder?: string
  minRows?: number
  maxRows?: number
  maxLength?: number
  onKeyDown?: (event: React.KeyboardEvent) => void
  onPaste?: (event: React.ClipboardEvent) => void
  onCompositionStart?: (event: React.CompositionEvent) => void
  onCompositionEnd?: (event: React.CompositionEvent) => void
}

export const TextareaAutosize: FC<TextareaAutosizeProps> = ({
  value,
  onValueChange,
  textareaRef,
  className,
  placeholder = "",
  minRows = 1,
  maxRows = 6,
  maxLength,
  onKeyDown = () => {},
  onPaste = () => {},
  onCompositionStart = () => {},
  onCompositionEnd = () => {}
}) => {
  useEffect(() => {
    if (textareaRef?.current) {
      textareaRef.current.style.maxHeight = "184px"
    }
  }, [textareaRef?.current])

  return (
    <ReactTextareaAutosize
      ref={textareaRef}
      className={cn(
        "bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex w-full resize-none rounded-md border-2 px-3 py-2 text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      autoFocus={false}
      minRows={minRows}
      maxRows={minRows > maxRows ? minRows : maxRows}
      placeholder={placeholder}
      value={value}
      maxLength={maxLength}
      onChange={event => onValueChange(event.target.value)}
      onKeyDown={onKeyDown}
      onPaste={onPaste}
      onCompositionStart={onCompositionStart}
      onCompositionEnd={onCompositionEnd}
    />
  )
}
