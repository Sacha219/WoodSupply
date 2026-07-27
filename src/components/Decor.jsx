function Decor() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(180,115,64,0.06), transparent 70%)', borderRadius: '50%' }}></div>
      <div style={{ position: 'absolute', bottom: '10%', left: '3%', width: '100px', height: '100px', border: '1px solid rgba(180,115,64,0.1)', transform: 'rotate(20deg)' }}></div>
      <div style={{ position: 'absolute', top: '30%', right: '5%', width: '60px', height: '60px', border: '1px solid rgba(180,115,64,0.08)', transform: 'rotate(45deg)' }}></div>
    </div>
  )
}
export default Decor