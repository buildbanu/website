document.addEventListener('DOMContentLoaded', () => {
    // Interactive Hardware Schematic & Breadboard Node Generator for Engineering @ banû
    const canvas = document.getElementById('schematicCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = canvas.offsetWidth;
        let height = canvas.height = 400;

        window.addEventListener('resize', () => {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = 400;
        });

        const nodes = [
            { x: width * 0.15, y: height * 0.3, label: "LiDAR SLAM Array" },
            { x: width * 0.5, y: height * 0.2, label: "FPGA Edge Processor" },
            { x: width * 0.85, y: height * 0.3, label: "Thermal Sensor Fusion" },
            { x: width * 0.3, y: height * 0.75, label: "Biometric Telemetry Bus" },
            { x: width * 0.7, y: height * 0.75, label: "Encrypted Radio Mesh" }
        ];

        let pulse = 0;

        function drawSchematic() {
            ctx.clearRect(0, 0, width, height);

            // Grid lines
            ctx.strokeStyle = 'rgba(72, 152, 171, 0.08)';
            ctx.lineWidth = 1;
            const gridSize = 40;
            for (let x = 0; x < width; x += gridSize) {
                ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
            }
            for (let y = 0; y < height; y += gridSize) {
                ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
            }

            // Circuit traces
            ctx.strokeStyle = '#4898ab';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(nodes[0].x, nodes[0].y); ctx.lineTo(nodes[1].x, nodes[1].y);
            ctx.moveTo(nodes[1].x, nodes[1].y); ctx.lineTo(nodes[2].x, nodes[2].y);
            ctx.moveTo(nodes[0].x, nodes[0].y); ctx.lineTo(nodes[3].x, nodes[3].y);
            ctx.moveTo(nodes[2].x, nodes[2].y); ctx.lineTo(nodes[4].x, nodes[4].y);
            ctx.moveTo(nodes[3].x, nodes[3].y); ctx.lineTo(nodes[4].x, nodes[4].y);
            ctx.stroke();

            // Active pulsing nodes
            pulse += 0.05;
            const pulseRadius = 5 + Math.sin(pulse) * 3;

            nodes.forEach(node => {
                ctx.strokeStyle = '#90d46c';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(node.x, node.y, 14 + pulseRadius, 0, Math.PI * 2);
                ctx.stroke();

                ctx.fillStyle = '#90d46c';
                ctx.beginPath();
                ctx.arc(node.x, node.y, 4.5, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = '#e2e8f0';
                ctx.font = '12px Inter, monospace';
                ctx.fillText(node.label, node.x - 55, node.y - 22);
            });

            requestAnimationFrame(drawSchematic);
        }

        drawSchematic();
    }
});
