from . import index, render_template

@index.route('/')
def index():
    return render_template('indexs/topic-content.html')


#@index.route('/indexss')
#def indexpage():
#    return render_template('indexs/base.html')