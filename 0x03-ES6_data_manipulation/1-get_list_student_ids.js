export default function getListStudentIds(val) {
  if (!Array.isArray(val)) {
    return [];
  }
  return val.map((student) => student.id);
}
