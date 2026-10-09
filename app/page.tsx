export default function Home() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>YouTube Agent Skill</h1>
      <p>Eleven Claude skills that run a YouTube channel. Free, MIT, no signup, no API key, nothing to connect.</p>
      
      <h2>The Eleven Skills</h2>
      <ul>
        <li><strong>/yt-script</strong> - One idea into a script with scored hooks</li>
        <li><strong>/yt-package</strong> - Title and thumbnail as one pairing</li>
        <li><strong>/yt-edit</strong> - Transcript into edit decision list</li>
        <li><strong>/yt-comment</strong> - Comment section triaged with replies</li>
        <li><strong>/yt-plan</strong> - Weekly content plan</li>
        <li><strong>/yt-viral</strong> - What&apos;s working in your niche</li>
        <li><strong>/yt-retention</strong> - Retention analysis</li>
        <li><strong>/yt-shorts</strong> - Find Shorts in long videos</li>
        <li><strong>/yt-seo</strong> - Description, tags, and queries</li>
        <li><strong>/yt-chapters</strong> - Validated chapters from transcript</li>
        <li><strong>/yt-audit</strong> - Full channel audit</li>
      </ul>

      <h2>Install</h2>
      <p>Clone the repository:</p>
      <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
        git clone https://github.com/Jakeschincariol/youtube-agent-skill.git
      </pre>
    </main>
  )
}
