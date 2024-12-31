import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div
      className={`gap-x-1 flex flex-wrap text-sm font-serif ${props.className || ''}`}>
      <span>林中小屋</span>
      <a
        href='https://www.lzy599.space/'
        className='underline justify-start'>
        LZY的个人星球
      </a>
      .
    </div>
  )
}
