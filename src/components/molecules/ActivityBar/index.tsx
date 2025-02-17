import { ActivityBarButton } from '@/components/atoms/ActivityBarButton'

export const ActivityBar: React.FC = () => {
  return (
    <div className="w-12 bg-[#21222c] flex flex-col items-center py-4 space-y-4">
      <ActivityBarButton
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 6h18M3 12h18M3 18h18"
            />
          </svg>
        }
      />
      <ActivityBarButton
        isActive
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        }
      />
    </div>
  )
}
