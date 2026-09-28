from src.utils.add_nums import add_nums


def test_add_nums() -> None:
    sum = add_nums([1, 2, 3])
    assert sum == 6
