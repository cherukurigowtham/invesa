export default function Footer() {
    return (
        <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid #eaeaea', marginTop: '2rem' }}>
            <p>&copy; {new Date().getFullYear()} Invesa. All rights reserved.</p>
        </footer>
    );
}
