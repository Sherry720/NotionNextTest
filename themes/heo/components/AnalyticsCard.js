import CONFIG from '../config'
import { siteConfig } from '@/lib/config'

/**
 * 博客统计卡牌
 * @param {*} props
 * @returns
 */
export function AnalyticsCard(props) {
  const fallInLoveDate = new Date(siteConfig('HEO_SITE_CREATE_TIME', null, CONFIG))
  const today = new Date()
  const fallInLoveTime = today.getTime() - fallInLoveDate.getTime()
  const fallInLoveDays = Math.ceil(fallInLoveTime / (1000 * 60 * 60 * 24))

  const meetDate = new Date(siteConfig('HEO_MEET_TIME', null, CONFIG))
  const meetTime = today.getTime() - meetDate.getTime()
  const meetDays = Math.ceil(meetTime / (1000 * 60 * 60 * 24))

  const { postCount } = props
  return (
    <>
      <div className='text-md flex flex-col space-y-1 justify-center px-3'>
        <div className='inline'>
          <div className='flex justify-between'>
            <div>内容:</div>
            <div>{postCount} 篇</div>
          </div>
        </div>
        <div className='inline'>
          <div className='flex justify-between'>
            <div>纪念日:</div>
            <div>{fallInLoveDays} 天</div>
          </div>
        </div>
        <div className='meet'>
          <div className='flex justify-between'>
            <div>邂逅:</div>
            <div>{meetDays} 天</div>
          </div>
        </div>
        {/* 访客数 */}
        <div className='busuanzi_container_site_uv'>
          <div className='flex justify-between'>
            <div>访客数:</div>
            <div className='busuanzi_value_site_uv' />
          </div>
        </div>
      </div>
    </>
  )
}
