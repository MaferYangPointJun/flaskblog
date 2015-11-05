from . import index, render_template

@index.route('/')
def index():
    return render_template('indexs/base.html')
