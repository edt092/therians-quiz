interface ProgressBarProps {
  progress: number
  current: number
  total: number
}

export default function ProgressBar({ progress, current, total }: ProgressBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-mystic-dark/85 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-2xl mx-auto px-5 py-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gold/50 text-[10px] font-cinzel tracking-[0.25em] uppercase">
            Animal Secreto
          </span>
          <span className="text-white/30 text-[10px] font-mono tracking-widest">
            {String(current).padStart(2, '0')} / {total}
          </span>
        </div>
        <div className="h-[2px] bg-white/[0.08] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700 ease-out"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #9a7a2e 0%, #c9a84c 60%, #e8c96b 100%)',
              boxShadow: '0 0 8px rgba(201,168,76,0.5)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
